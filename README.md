# Web Development Project 7 - *Crewmate Creator*

Submitted by: **Omar Madjitov**

This web app: **allows users to create, view, edit, and delete customized crewmates with unique attributes including name, speed, and color.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form allows users to add new crewmates**
- [x] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several color options**
- [x] **The site displays a summary page of all the user's added crewmates**
- [x] **A previously created crewmate can be updated from the crewmate list**
- [x] **A previously created crewmate can be deleted from the crewmate list**
- [x] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page 
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

The following **additional** features are implemented:

- [x] Customized box shadows for each crewmate based on their color
- [x] Responsive design for improved display on mobile devices
- [x] Animated navigation links for smoother user experience

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ScreenToGif

## Notes

One challenge was handling state updates in the form fields when editing a crewmate. Initially, the crewmate details would disappear when typing in the form. This was resolved by carefully managing the `useState` hooks and controlling the input values directly.

## License

    Copyright [2024] [Omar Madjitov]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
