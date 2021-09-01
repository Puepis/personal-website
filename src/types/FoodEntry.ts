interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
interface FoodEntry {
  title: string;
  description: string;
  image: Image;
  source?: string; // url representing recipe source
  dateCreated: Date;
}

export type { FoodEntry, Image };
