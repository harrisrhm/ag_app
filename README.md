## ag_app

## Background and Objectives

The app is created to quickly test algolia instantsearch by initializing clientSearch instance, push JSON data and indexing attributes for instantsearch.


## Demo link

https://harrisrhm.github.io/ag_app/


## Programming language

The application and logic is written in HTML, CSS, VanillaJS and Ruby.

## Checklist
		
| Step | Description                         | Result     | Comment                                                 |
| ---- | ------------------------------      | ---------- | -----------------------------------------------------   |
| 1	   | Signup for Algolia                  | Complete   |             -                                           |
| 2    | Download sample JSON file	         | Complete   |	            -                                           |
| 3	   | Write indexing script	             | Complete   | Written in Ruby                                         |
| 4	   | Configure index within script       | Complete   |             -                                           |
| 4.1  | Define seachable criteria	         | Complete   | Declared attributes are 'name', 'description', 'brand'  | 
| 4.2  | Custom ranking criteria             | Complete   | Diplayed products with higher rating attribute          |
| 4.3  | Optional configuration settings	 | Complete	  | Incorporated drop down hierarchicalCatagories to root   |
| 5	   | Download broken frontend            | Complete   |	Refer 'troubleshooting' section                         |
| 6	   | Trobleshoot broken code             | Complete   |	Refer 'troubleshooting' section                         |
| 6.1  | Set attributesForFaceting	         | Complete   |	Refer 'troubleshooting' section                         |
| 7    | Grant access to view indices        | Complete   |	            -                                           |
| 8    | Run index script                    | Complete   |	Refer 'instruction' section                             |
| 9    | API Key                             | Complete   |	Admin API key is stored in .env file for final indexing script. For front-end search-only API key is used and this is stored in JS file |