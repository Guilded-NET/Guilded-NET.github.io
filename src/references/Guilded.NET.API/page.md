# `BaseGuildedClient`
```
A base for Guilded client.
```
**Type:** `Class`
**Attributes:**
- `Public`
- `Abstract`

> ## `BaseGuildedClient`
> ```
> A base for Guilded client.
> ```
> **Type:** `Constructor`
> **Parameters:**
> 
> - Uri `apiUrl` - URL of Guilded API
> - Uri `mediaUrl` - URL for media uploading
> 
> **Exceptions:**
> - `ArgumentNullException` - When apiUrl or socketUrl are null
> - `UriFormatException` - When apiurl or socketurl are invalid
> 
> **Attributes:**
> - `Public`

> ## `BaseGuildedClient`
> ```
> A base for Guilded client.
> ```
> **Type:** `Constructor`
> 
> **Exceptions:**
> - `ArgumentNullException` - When apiUrl or socketUrl are null
> - `UriFormatException` - When apiurl or socketurl are invalid
> 
> **Attributes:**
> - `Public`

> ## Task<IRestResponse<object>> `ConnectAsync`
> ```
> Connects to Guilded client/user.
> ```
> **Type:** `Method`
> 
> **Attributes:**
> - `Public`
> - `Abstract`

> ## EventHandler `Connected`
> ```
> Event when client connects to the Guilded.
> ```
> **Type:** `Event`
> 
> **Attributes:**
> - `Public`

> ## EventHandler `ConnectedEvent`
> ```
> Events when client gets connected.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Protected`

> ## double `DefaultHeartbeat`
> ```
> Default span of time between heartbeats.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Task<IRestResponse<object>> `DisconnectAsync`
> ```
> Disconnects from Guilded client/user.
> ```
> **Type:** `Method`
> 
> **Attributes:**
> - `Public`
> - `Abstract`

> ## EventHandler `Disconnected`
> ```
> Event when client disconnects from Guilded.
> ```
> **Type:** `Event`
> 
> **Attributes:**
> - `Public`

> ## EventHandler `DisconnectedEvent`
> ```
> Events when client gets disconnected.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Protected`

> ## EventHandler<GuildedException> `Error`
> ```
> Event when error occurs.
> ```
> **Type:** `Event`
> 
> **Attributes:**
> - `Public`

> ## EventHandler<GuildedException> `ErrorEvent`
> ```
> Event when error occurs.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Protected`

> ## Task<IRestResponse<**T**>> `ExecuteRequest`<**T**>
> ```
> Sends a request to Guilded's API with given arguments.
> ```
> **Type:** `Method`
> 
> **Exceptions:**
> - `GuildedException` - When Guilded itself throws an error
> 
> **Parameters:**
> - Endpoint `endpoint` - Guilded API endpoint
> - bool `enableCookies` - Args to be given to that endpoint
> - IReqAddable[] ...`addables` - If it should add cookies to the request
> 
> **Attributes:**
> - `Public`
> - `Asynchronous`

> ## Task<IRestResponse<**T**>> `ExecuteRequest`<**T**>
> ```
> Sends a request to Guilded's API with given arguments.
> ```
> **Type:** `Method`
> 
> **Parameters:**
> - Endpoint `endpoint` - Guilded API endpoint
> - IReqAddable[] ...`addables` - If it should add cookies to the request
> 
> **Exceptions:**
> - `GuildedException` - When Guilded itself throws an error
> 
> **Attributes:**
> - `Public`
> - `Asynchronous`

> ## Task<IRestResponse<object>> `ExecuteRequest`
> ```
> Sends a request to Guilded's API with given arguments.
> ```
> **Type:** `Method`
> 
> **Parameters:**
> - Endpoint `endpoint` - Guilded API endpoint
> - bool `enableCookies` - Args to be given to that endpoint
> - IReqAddable[] ...`addables` - If it should add cookies to the request
> 
> **Exceptions:**
> - `GuildedException` - When Guilded itself throws an error
> 
> **Attributes:**
> - `Public`
> - `Asynchronous`

> ## Task<IRestResponse<object>> `ExecuteRequest`
> ```
> Sends a request to Guilded's API with given arguments.
> ```
> **Type:** `Method`
> 
> **Parameters:**
> - Endpoint `endpoint` - Guilded API endpoint
> - IReqAddable[] ...`addables` - If it should add cookies to the request
> 
> **Exceptions:**
> - `GuildedException` - When Guilded itself throws an error
> 
> **Attributes:**
> - `Public`
> - `Asynchronous`

> ## double `HeartbeatTime`
> ```
> Span of time between each heartbeat.
> ```
> **Type:** `Property`
> 
> **Attributes:**
> - `Public`

> ## Thread `HeartbeatThread`
> ```
> Thread for heartbeats.
> ```
> **Type:** `Property`
> 
> **Attributes:**
> - `Protected`

> ## Task `HeartbeatThreadMethod`
> ```
> Method for a heartbeat thread.
> ```
> **Type:** `Method`
> 
> **Parameters:**
> - CancellationToken `token` - Token for cancelling while loop
> 
> **Exceptions:**
> - `GuildedException` - When it fails to send a ping through REST client
> 
> **Attributes:**
> - `Protected`
> - `Virtual`
> - `Asynchronous`

> ## CancellationTokenSource `HeartbeatToken`
> ```
> Token for cancelling heartbeat thread.
> ```
> **Type:** `Property`
> 
> **Attributes:**
> - `Protected`

> ## Uri `GuildedAPIURL`
> ```
> Guilded API URL.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Uri `GuildedImgURL`
> ```
> Guilded image CDN URL.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Uri `GuildedMediaURL`
> ```
> Guilded media URL. Allows you to upload images and videos.
> ```
> **Type:** `Field`
> 
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## void `InitWebsocket`
> ```
> Initializes websocket.
> ```
> **Type:** `Method`
> **Parameters:**
> - double? `reconnection` - Seconds of time between each reconnection
> - string `socketurl` - URL of WebSocket
> - double `heartbeat` - Seconds between each heartbeat
> **Attributes:**
> - `Protected`
> - `Virtual`

> ## IList<GuildedCookie> `LoginCookies`
> ```
> Cookies given when client logs in.
> ```
> **Type:** `Parameter`
> **Attributes:**
> - `Public`

> ## Task `SendHeartbeat`
> ```
> Sends a heartbeat to the websocket server.
> ```
> **Type:** `Method`
> **Parameters:**
> - string `value` - Heartbeat value
> **Exceptions:**
> - `GuildedException` - When it fails to send a ping through REST client
> **Attributes:**
> - `Protected`
> - `Virtual`
> - `Async`

> ## void `SetCookies`
> ```md
> Sets cookies to list of *RestResponseCookie*.
> ```
> **Type:** `Method`
> **Parameters:**
> - IList<RestResponseCookie`cookies` - List of login cookies
> **Attributes:**
> - `Public`

> ## Task<Uri> `UploadImage`
> ```
> Uploads image to Guilded.
> ```
> **Type:** `Method`
> **Parameters:**
> - string `filepath` - Path of the file
> - byte[] `filedata` - Data of the file
> **Exceptions:**
> - `GuildedException` - When Guilded itself throws an error
> **Attributes:**
> - `Public`
> - `Asynchronous`

# `Endpoint`
```
Represents endpoint in Guilded API.
```
**Type:** `Class`
**Attributes:**
- `Public`

> ## `Endpoint`
> ```
> Represents endpoint in Guilded API.
> ```
> **Type:** `Constructor`
> **Parameters:**
> - string `path` - Path of the REST Endpoint
> - Method `method` - Method of the REST Endpoint
> **Attributes:**
> - `Public`

> ## Endpoint `LOGIN`
> ```
> Endpoint for logging into Guilded user.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `LOGOUT`
> ```
> Endpoint for logging out of the Guilded user.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `ME`
> ```
> Endpoint for getting this user.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `PASSWORD`
> ```
> Endpoint for setting a new password.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `PING`
> ```
> Endpoint for pinging Guilded.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `PRESENCE`
> ```
> Endpoint for changing presence(online, invisible, idle, do not disturb) to other presence.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `STATUS`
> ```
> Endpoint for changing your status message and/or status emote.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Endpoint `UPLOAD_MEDIA`
> ```
> Endpoint for uploading media to Guilded and receiving new URL. Use Guilded media URL for this, not a normal Guilded API URL.
> ```
> **Type:** `Field`
> **Attributes:**
> - `Public`
> - `Static`
> - `Read-only`

> ## Method `EndpointMethod`
> ```
> Method of the Endpoint(GET, POST, ...).
> ```
> **Type:** `Property`
> **Attributes:**
> - `Public`

> ## string `Path`
> ```
> Path to the REST Endpoint.
> ```
> **Type:** `Property`
> **Attributes:**
> - `Public`