---
title: Server
layout: references
section: references
tags:
  - references
  - class
description: "

/// Represents a team or a guild in Guilded."
---

## Server Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

/// Represents a team or a guild in Guilded.

```csharp
public class Server : Guilded.Base.ContentModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; Server

| Constructors | |
| :--- | :--- |
| [Server(HashId, HashId, string, DateTime, Nullable&lt;ServerType&gt;, string, string, Uri, Uri, string, bool, Nullable&lt;Guid&gt;)](Server.Server(HashId,HashId,string,DateTime,Nullable_ServerType_,string,string,Uri,Uri,string,bool,Nullable_Guid_) 'Guilded.Base.Servers.Server.Server(Guilded.Base.HashId, Guilded.Base.HashId, string, System.DateTime, System.Nullable<Guilded.Base.Servers.ServerType>, string, string, Uri, Uri, string, bool, System.Nullable<Guid>)') | Initializes a new instance of [Server](Server 'Guilded.Base.Servers.Server') from specified JSON properties. |

| Properties | |
| :--- | :--- |
| [About](Server.About 'Guilded.Base.Servers.Server.About') | Gets the description of [the server](Server 'Guilded.Base.Servers.Server'). |
| [Avatar](Server.Avatar 'Guilded.Base.Servers.Server.Avatar') | Gets [the URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the icon image of [the server](Server 'Guilded.Base.Servers.Server'). |
| [Banner](Server.Banner 'Guilded.Base.Servers.Server.Banner') | Gets [the URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the banner image of [the server](Server 'Guilded.Base.Servers.Server'). |
| [CreatedAt](Server.CreatedAt 'Guilded.Base.Servers.Server.CreatedAt') | Gets the date when [the server](Server 'Guilded.Base.Servers.Server') was created. |
| [DefaultChannelId](Server.DefaultChannelId 'Guilded.Base.Servers.Server.DefaultChannelId') | Gets [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') of [the server](Server 'Guilded.Base.Servers.Server') that is the main channel. |
| [Id](Server.Id 'Guilded.Base.Servers.Server.Id') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server'). |
| [IsVerified](Server.IsVerified 'Guilded.Base.Servers.Server.IsVerified') | Gets whether [the server](Server 'Guilded.Base.Servers.Server') is verified by the Guilded staff team. |
| [Name](Server.Name 'Guilded.Base.Servers.Server.Name') | Gets the displayed name of [the server](Server 'Guilded.Base.Servers.Server'). |
| [OwnerId](Server.OwnerId 'Guilded.Base.Servers.Server.OwnerId') | Gets [the user](User 'Guilded.Base.Users.User') that created [the server](Server 'Guilded.Base.Servers.Server'). |
| [Timezone](Server.Timezone 'Guilded.Base.Servers.Server.Timezone') | Gets the set timezone of [the server](Server 'Guilded.Base.Servers.Server'). |
| [Type](Server.Type 'Guilded.Base.Servers.Server.Type') | Gets the selected [type](ServerType 'Guilded.Base.Servers.ServerType') of [the server](Server 'Guilded.Base.Servers.Server'). |
| [Url](Server.Url 'Guilded.Base.Servers.Server.Url') | Gets the part of URL to the [the server](Server 'Guilded.Base.Servers.Server'). |
