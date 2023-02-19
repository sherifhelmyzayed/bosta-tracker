<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">React-APP bosta package tracker </h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project is about package tracker . This app uses public API's from "Bosta". The app shows the status of delivering shipment by tracking shipment location from the seller to different warehouses until it is delivered to the client. The app has an extra feature of toggeling between english and arabic versions for a better user experience.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This React app built with:

* React
* Redux
* Typescript
* MUI
* AXIOS
* Vite

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Please fork this repo and do the following steps

### Prerequisites

You will need to have the latest version of Yarn


### Installation

Please follow the instructions below

1. Fork the repo
   ```sh
   https://github.com/sherifhelmyzayed/bosta-tracker.git
   ```
   
2. Install yarn packages in front-end
 ```sh
 cd bosta-tracker
 yarn install
 ```
 
3. Start the front end server
```sh
yarn run dev
```

```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Live version: 
https://bosta-tracker.vercel.app/

After running the project for the first time. You can enter one of the public ID's for testing. The ID and data are stored in the state management and it is shared all-over the App. 

Colors and sliders are depending on the shipment status. Green for successful deliver, Yellow for ongoing and Red for canceled delivery. 

Icons are showing depending on the stage of the delivery. For every step, Icons are toggeled and changed.

Bonus feature: Having English and Arabic versions. 
Bonus feature: User is prompt to enter tracking numbers and the user can test multiple numbers without refreshing the page. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>