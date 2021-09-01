interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}
interface FoodEntry {
  title: string;
  description: string;
  imagePath?: string; // todo: remove
  image?: Image;
  source?: string; // url representing recipe source
  dateCreated: Date;
}

export type { FoodEntry, Image };
