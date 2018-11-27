----------------------------------  CSS(cascading style sheet)  --------------------------------
a. The order of precedence
  1. (most) with !important always takes precedence
  2. (?) more specific selector takes precedence over less specific one(comparing number of occurence of single selectors)
  3. (?) html style inline css overrides css rules in style tag and css file
  4. (basic) the rule comes later in the code overrides ealier rules if both have same specificity
  single selector order
  5. id
  6. class/attribute selectors ([src=''])/pseudo-class(:hover)
  7. element (div)/ pseudo-elements (::before)
  

----------------------------------  JS(java script)  --------------------------------
a. Why do we use bootstrap?
  - Bootstrap contains html, css and js files once installing it. 
  - It helps developers to easily use basic function with only importing libraries.
  - It provide responsive functionality and grid functionality
  - Also, it is easily to edit when you need to add more or change functionality.
  - ...

b. why do we use jquery?
  > Fixs 'broken' DOM API  <- DOM API( methods docomument.querySelector get element by id, etc) considered broken,jquery makes easy and quicker
  > Clarity and shorter
  > Easy to use 
  > Cross-Browser Support  <- takes care Explorer9,8
  > Ajax

  - It is to easily use JS on the website. Since to achieves some common tasks, that requires many lines of js, while jquery 
    do it in a single line
  - It also simplify complicated things from js, like ajax calls and dom manipulation
  - jquery library contains: HTML/DOM manipulation; css manipulation; html event methods; effects and animation; ajax; utilities 
  - manipulation of the dom(document object model) and is mechanism for representing and interacting with HTML,XHTML or XML documents.

c. why not use jquery?
  > if only use few methods, can do by self, unnessary to use jquery as it have hundreds methods, so it's too heavy tool
  > unnecessary dependency
  > performance
   
  
  
