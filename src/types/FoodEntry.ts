interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
interface FoodEntry {
  title: string;
  image: Image;
  description?: string;
  source?: string; // url representing recipe source
  dateCreated: Date;
}

export type { FoodEntry, Image };
