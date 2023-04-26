# node bash scripting

## in package.json:

```json

  "scripts": {
    "start": "node server.js",// instead of `node server.js` == `npm run start`
    "dev":"nodemon server.js", // instead of `nodemon server.js` == `npm run dev`
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## when I didn't set the bash scripts for running server using node or nodemon

```sh
$ node server.js # running the server using node
$ nodemon server.js # running the server using nodemon
```

## when I did set the bash scripting for running server using node or nodemon

```sh
$ npm run start # running the server using node
$ npm run dev # running the server using nodemon
```

How to see the `preview` on vscode:

```
ctrl + Shift + v
```

How to use debugger in vscode

```
I don't know
```

## when I am fetching data from frontend using curl

```
sending a request from client == fetching data from server by implementing fetch fucntion from frontend. The fetch functionality will send the request through the path address of the web link.

http 요청을 보낸다 == 백엔드에 있는 서버를 통해 데이터를 fetching하는 행위
== 프론트앤드에서 http 요청을 보낸다
== 프론트앤드에서 fetch함수를 통해 request라는 promise를 보낸다.
== 프론트앤드에서 fetch함수를 구현한다.
== 프론트앤드에서 request promise를　만들　때　path, header정보，mehtod, body정보를　설정한다．
-> path == 어디로　보낼지
-> header == 데이터를　어떤　형식으로　보낼지
-> method == 어떤 http method으로　보낼지
->　body　==　어떤　request정보를　stringify해서　path의　일부가　아닌　형식으로　보낼지
== backend에서　port를　통해서　request를　받을　준비를　하고　있다．
-> backend에　도착하면　body-parser를　이용해서　req.body를 json형식으로　해석하고
-> eg. middleware use()함수를　통해서　bodyParser로　req.body를　해석하고

```

```js
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));
```

```
-> when it reeach the callback function, then request promise (object) received.
```

```js
app.post(`/shorten`, ...middlewares, (req, res) => {
  /*header information coming from fetch fucntion will be evaluated
  through
  - app.post() => req.headers.method
  - `shorten` == path => req.headers.path
  - middlewares will addtionally check the request promise (object)
  req.body
  */
  // at this point, done parsing request promise and receiving request promise from the server
});
```

### stackoverflow

link:
https://stackoverflow.com/questions/20956323/what-is-the-http-header-host-method-path-scheme-version-used-for

```

using curl == using Postman == fetching from frontend == accessing using address path(link) on browser

```

### using curl

overall:

```

curl [-H] [-X] [path] [data]

curl -H : header information coming from browswer forntend (Content-Type : application/json). This can be removed if I have body-parser to parse the json file to be {type: '_/_'}.
eg. app.use(bodyParser.json({type: '_/_'}));
-X : http method (POST, GET, PUT, DELETE)
path
--data (or -d) : data passing through req.body if the -X is POST

```

```sh
$ curl -X POST http://localhost:3500/shorten -d '{"originalUrl":"https://www.lucidchart.com/pages/landing?utm_source=google&utm_medium=cpc&utm_campaign=_chart_en_tier1_mixed_search_brand_exact_&km_CPC_CampaignId=1490375427&km_CPC_AdGroupID=55688909257&km_CPC_Keyword=lucid%20chart&km_CPC_MatchType=e&km_CPC_ExtensionID=&km_CPC_Network=g&km_CPC_AdPosition=&km_CPC_Creative=442433236004&km_CPC_TargetID=aud-1888659850681:kwd-55720648523&km_CPC_Country=9000893&km_CPC_Device=c&km_CPC_placement=&km_CPC_target=&gclid=CjwKCAjw9J2iBhBPEiwAErwpeZ2hLNc3sfrB5TVAIoSVPEvZcVfkjXnbSznA_7UEuAMFYoNl3h3BQBoCz_YQAvD_BwE"}'

```

### why do I need to have body-parser specifically for using http method POST?

```
The reason is because req.body might contains various types of data in there.
Whereas, when we are passing the data through other http methods such as GET, PUT, or DELETE, all the data is part of path param variables (:id, or :content, :post) that can be shown on the link when someone tries to fetch information from the server or sending the request from client.
```

## express && mongodb REST API using POSTMAN

link:
https://www.youtube.com/watch?v=tJlmAAxwygc

```

```
