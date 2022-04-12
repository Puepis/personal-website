import { IPhotoRepository } from "../interfaces/IPhotoRepository";
import { FoodEntry, Image } from "../types/FoodEntry";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

export class NotionPhotoRepository implements IPhotoRepository {
  imageFromPage = (page: any, index: number): Image => {
    return {
      id: index.toString(),
      url: page.properties.Image.files[0]?.file?.url
    };
  };

  async getAllEntries(): Promise<FoodEntry[]> {
    try {
      const response = await notion.databases.query({
        database_id: databaseId as string,
        sorts: [
          {
            property: "Created",
            direction: "descending"
          }
        ]
      });

      const responseResults: FoodEntry[] = response.results.map((page: any, index: number) => {
        const dateStr = page.properties.Created.date?.start;
        return {
          id: index.toString(),
          title: page.properties.Name.title[0]?.plain_text,
          description: page.properties.Description.rich_text[0]?.plain_text,
          image: {
            id: index.toString(),
            url: page.properties.Image.files[0]?.file?.url
          },
          source: page.properties.Link.url,
          ...(dateStr && { dateCreated: new Date((dateStr as string) + " 00:00") })
        };
      });
      return responseResults;
    } catch (error) {
      console.error(error);
    }
    return [];
  }
}
