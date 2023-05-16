# intro

1. entry point is dynamic-widget.html to be open with a browser


    index.html includes :
    1. link path to css ( main.css ), defines all stylesheets.
    2. script path to js file
    3. script which is also a module, so it can do import to another file/class
    3. path to img files.

# objective
1. css folder
2. img folder
3. js folder
4. html files under the root

# run options:
1. straight from the browser:

    
    
    open dynamic-widget.html in any browser. browser will read the html tags.
2. run via node
    this should use a server to host your files in.
    then access it via localhost:8080/<your html file>
    so either a web server, of use local http-server installed by npm


    1. npm install -g http-server
    2. navigate to the directory containing the html files
    3. run http-server in terminal
    now http server is running, publishing it's ready address & port
    for i.e. http://lccalhost:8080

    4. run youur app.js
        node app.js
    
    5. open browser, and navigatge to **http://localhost:8080/dynamic-widget**
    
    widget should be displayed!
    