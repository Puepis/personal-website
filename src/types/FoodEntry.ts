interface FoodEntry {
  title: string;
  description: string;
  imagePath: string;
  source?: string; // url representing recipe source
  dateCreated: Date;
}

export default FoodEntry;
