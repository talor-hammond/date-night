# datenite

Building a three-course menu & wine-pairing with a few queries + other stuff going on
------

### Notes:

* *Design*
    * React-scroll: <https://www.npmjs.com/package/react-scroll>
    * slick.co: <http://kenwheeler.github.io/slick/>

* *Promises*
    * Really good practice w promises thus far -- 
    * **Promise.all()**
        * Issue where .map() was being used on an empty / partially empty array -- all the promises were being resolved in parallel; used Promise.all() to tell the program to wait for the three promises to return, *then* map through the array.
            * **Array destructuring**: used array destructuring to assign variable to each index in the array, without having to do multiple declarations

* *React-scroll-to-component*
   * Simple but powerful library for creating smooth / customisable animations to react components using refs
