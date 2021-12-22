# Project Overview

This project contains a staff-directory component which is used to display data of all the staff members and it contains basic information of the all-employee from the organization.

# Staff Directory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

# Technologies

SharePoint Online, Angular, PnP, Bootstrap

# Prerequisites in Local Machine

- NodeJS >= 14.17.5 (https://nodejs.org/en/download/releases/)
- Angular >= 12 (https://angular.io/guide/setup-local)
- Git >= 2 (https://git-scm.com/download/win)

# List

- Create List in sharepoint-> StaffDirectory 
    ID=>Number;
    AuthorId=>Number;
    Title=>Single Line Text;
    JobTitle=>Single Line Text;
    Department=>Single Line Text;
    EMail=>Single Line Text;
    Phone=>Single Line Text;
    WorkPhone=>Single Line Text;
    MobilePhone=>Single Line Text;
    Picture=>Any;

# List Name

- Here Data Will Come From Sharepoint UserInfoList.  

# Install Packages

- Install dependancy of pnpjs `npm i @pnp/pnpjs` and put bootstrap cdk in index.html


## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Upload in SharePoint

After build need to open the create folder with component name under Site Assets in the SharePoint environment and upload all files which created in the dist directory. Change the path of all files as per SharePoint folder structure in the index.html

## Create Page
- Create one page and load index.html file under that page.
