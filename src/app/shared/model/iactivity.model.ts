export interface IActivity {
  id: number;
  name: string;
  date: Date;
  comments?: string;
  distance?: number;
  gpsData: string;
}
