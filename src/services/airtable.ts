import Airtable, { Attachment, FieldSet, Record, Records } from "airtable";
import { FoodEntry, Image } from "../types/FoodEntry";
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE!);

type Callback = () => void;

type AirtableImage = Attachment & { width: number; height: number };

const imageFromRecord = (record: Record<FieldSet>): Image => {
  const attachments = record.get("Image") as Attachment[];
  const photo = attachments[0] as AirtableImage;
  return {
    id: photo.id,
    width: photo.width,
    height: photo.height,
    url: photo.url
  };
};

export async function fetchEntries(): Promise<FoodEntry[]> {
  const entries: FoodEntry[] = [];

  // This function (`page`) will get called for each page of records.
  const page = (records: Records<FieldSet>, fetchNextPage: Callback) => {
    records.forEach((record) => {
      const entry = {
        title: record.get("Title") as string,
        description: record.get("Description") as string,
        image: imageFromRecord(record),
        dateCreated: new Date(record.get("Date created") as string),
        ...(record.get("Recipe source") && { source: record.get("Recipe source") as string })
      };
      entries.push(entry);
    });

    // if there are more records page gets called again, otherwise done gets called
    fetchNextPage();
  };

  // select all records
  try {
    await base("Food Entries").select().eachPage(page);
  } catch (e) {
    console.error(e);
  }
  return entries;
}
export default base;
