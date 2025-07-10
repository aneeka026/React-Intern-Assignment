# Excel-Styleheet 

A front-end-only React + TypeScript prototype that visually and functionally replicates a modern spreadsheet interface for managing job requests. Inspired by tool like Google Sheets, this application is optimized for data tracking workflows such as task management, operations, and financial planning.


## Live Demo : 

##  Core Data Grid Features

-  **Inline Cell Editing** – Click directly into editable cells (`Job Request`, `Submitted`, `Submitter`, `Assigned`, `Due Date`)
-  **Status & Priority Badges** – Color-coded chips indicate task status (`In-process`, `Complete`, `Blocked`) and priority (`High`, `Medium`, `Low`)
-  **Cell Selection Highlighting** – Blue border + background on selected cells
-  **Clickable URLs** – URL fields open external profiles in new tabs
-  **Currency Formatting** – `Estimated Value` column displays values in Indian Rupees with formatting (e.g., ₹6,200,000)


## Application Structure

-  **Multi-Tab Navigation** – View data across tabs like `All Orders`, `Pending`, `Reviewed`, `Arrived`
-  **Header Section** – App title, user info, and workspace location
-  **Primary Toolbar** – Icon buttons for `Import`, `Export`, `Share`, `+ New Action`
-  **Secondary Toolbar** – Quick actions (e.g., `Q3 Financial Overview`, `ABC`, `Answer a question`, `Extract`)
-  **Filter Toolbar** – UI for `Hide Fields`, `Sort`, `Filter`, and `Cell View` options


## Data Management

-  **Mock Data Integration** – UI loads with pre-filled example job requests
-  **Live State Updates** – Any changes to cell data are reflected in real-time (no backend)
-  **Data Schema Includes**:  
  - ID  
  - Job Request Title  
  - Submitter Name + URL  
  - Assigned To  
  - Status  
  - Priority  
  - Submitted Date & Due Date  
  - Estimated Value (₹)


##  Technical Architecture

-  **React 18 + TypeScript (strict)** – Fully typed for developer safety and clarity
-  **Component-Based Structure** – All features split into small reusable units (`Cell`, `Row`, `Badge`, `Toolbar`, etc.)
-  **React Query Setup Ready** – Easily extendable to real API integration
-  **React Router DOM** – Built-in routing for future navigation/views


##  Screenshot
<img width="1440" height="685" alt="intern" src="https://github.com/user-attachments/assets/3faac957-0ab0-48e1-9a7f-ec8713b214f5" />

