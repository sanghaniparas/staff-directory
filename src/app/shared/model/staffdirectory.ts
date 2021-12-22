export class StaffDirectory{
    ID: number;
    AuthorId:number;
    Title: string;
    JobTitle: string;
    Department: string;
    EMail: string;
    Phone: string;
    WorkPhone: string;
    MobilePhone: string;
    Picture: any;
  
    constructor(obj?) {
        this.ID = (obj && obj.ID) || undefined;
        this.AuthorId = (obj && obj.AuthorId) || undefined;
        this.Title = (obj && obj.Title) || "";
        this.JobTitle = (obj && obj.JobTitle) || "";
        this.Department = (obj && obj.Department) || "";
        this.WorkPhone = (obj && obj.WorkPhone) || "";
        this.MobilePhone = (obj && obj.MobilePhone) || "";
        this.EMail = (obj && obj.EMail) || "";
        this.Phone = (obj && obj.Phone) || "";
        this.Picture = (obj && obj.Picture) || "";
    }
}