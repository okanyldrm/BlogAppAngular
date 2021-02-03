import { EventCategory } from "./EventCategory";

export class EventM{
    id!:string;
    title!:string;
    date!: Date;
    color!:string;
    time!:string;
    eventCategoryId!:number;
    eventCategory!:EventCategory;
}