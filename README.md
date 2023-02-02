# React-Pottery-project

***Demo version of website:*** https://leyluw777.github.io/React-Pottery-project/

## Description
This is multiple page e-commerce project, which sells different pottery products. The project was fully written on React.

## Structure of project
Generally, project consists of 8 pages which are:
* Home
* About
* Shop
* Delivery
* Blog 
* Contact
* Bag
* Cards' additional information <br/>

All pages has their own features, that will be mentioned below.

## Technologies 
What I used in project:
* React. All sections and pages were written by components. For react there were used libraries and packages such as:
  - React router - for switching the pages without loading.
  - React-cards - for ready structure of cards.
  - React-google-maps - for showing the location of shop on the page Contact (which could not work right now because of expiration date)
* SCSS. Some libraries related to styles are:
  - Animate css - for animation of texts on pages 
   - Framer motion - for some effects on website, precisely: 
     - Product image 3D effect, that you can see by clicking to any product and moving to product additional information page
     - Dragging effect on "Send" icon which is on Contact page. You can drag the icon and move inside the box.
   - Reveal animation - which is for animation of elements on scroll. You can see this effect scrolling down and elements will appear smoothly
* Bootstrap 
* Font-awesome for icons


## Features
* All pages are fully responsive. Toggle bar is created for small devices. Navbar is working on all pages and you can move to another page from any page of website.
* On home page, you can see some hover effects on cards, buttons. When you hover any card, the image is changing and button "Add to bag" is appearing. 
* Some functionality is also added. When you click to "Add to bag" button, it's added to bag page, and when you move to bag page you can see the item
* On the bag page, you can change the quantity of item, so the total price will also be changed.
* By clicking to any product, you can move to the product additional information, where some effects was applied too.
* On other pages (about, shop, delivery, blog, contact) there are some animations for texts, icons or images. 
* On Blog page, by holding text cards, you can move it and see the background images. Also, some background images have infinity animation there.
* There are some transitions for moving from one page to another
