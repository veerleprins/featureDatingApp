# Backend notes:

HTTP: The hypertext transfer protocol, not only for HTML-files. (Also: CSS-files and images).


Om een request te doen naar de server heb je een URL nodig (Uniform Resource Locator). Localhost:3000 is een eigen IP-adres.
Elk device heeft eigen IP-adres
Lastig om te onthouden bij elk device, vandaar URL. URL is domein. Vaak doe je google.com (maar dit heeft natuurlijk ook IP-adres)

## Bij URL:
http://test.example.com:3000/users/search?q=test&w=all#results

http: = protocol
test = subdomain
example.com = domain
3000 = port
users/search = path
q=test&w=all = query
results = fragment

http://test.example.com:3000 = server
users/search? =
q=test&w=all#results = 


method (get, put, delete etc.)
/ = path
host:developer.mozilla.org = header
accept-language: fr = header

statuscode 200, betekent: werkt helemaal.
statuscode 404, betekent: error, path bestaat niet.


## HTTP, van client naar server: 
Create: PUT , POST
Read: GET
Update: PATCH
Delete: DELETE

### Status:
server error : 5**
client error: 4**

### Mime types:
Text - text/plain, text/html, text/javascript
Image - image/image.png, image/image.jpeg
Audio - 
Video - 
Application - 


.use is wat anders dan .get

