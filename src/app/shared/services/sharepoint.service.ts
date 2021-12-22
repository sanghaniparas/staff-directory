import { Injectable } from '@angular/core';
import { StaffDirectory } from '../model/staffdirectory';
import pnp from '@pnp/pnpjs';
declare var _spPageContextInfo;

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor() { }

  getStaffData(): Promise<StaffDirectory[]> {
    return new Promise((resolve, reject) => {
      return pnp.sp.web.siteUserInfoList.items
        .select("*,ID,Title,Name,EMail,JobTitle,SipAddress,WorkPhone,MobilePhone,Picture,AuthorId")
        .filter("EMail ne null and MobilePhone ne null")
        .orderBy("ID", true)
        .top(5000)
        .get()
        .then((res: any) => {
          if (res.length > 0) {
            for (var i = 0; i < res.length; i++) {
              res[i].ProfileImage =
                _spPageContextInfo.webAbsoluteUrl +
                "/_layouts/15/userphoto.aspx?size=M&username=" +
                res[i].EMail;
              res[i].ProfileUrl =
                _spPageContextInfo.webAbsoluteUrl +
                "/_layouts/15/me.aspx/?p=" +
                res[i].EMail +
                "&v=work";
              res[i].ProfileImages =
                _spPageContextInfo.webAbsoluteUrl +
                "/_layouts/15/userphoto.aspx?size=L&username=" +
                res[i].EMail;
            }
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
