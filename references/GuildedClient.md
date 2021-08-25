
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET')
## GuildedClient Class
A base for all Guilded clients.  
```csharp
public abstract class GuildedClient : Guilded.NET.Base.BaseGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Guilded.NET.Base.BaseGuildedClient](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#129106; GuildedClient  

Derived  
&#8627; [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')  

| Constructors | |
| :--- | :--- |
| [GuildedClient()](GuildedClient_GuildedClient() 'Guilded.NET.GuildedClient.GuildedClient()') | A base for user bot clients and normal bot clients.<br/> |

| Fields | |
| :--- | :--- |
| [PreparedEvent](GuildedClient_PreparedEvent 'Guilded.NET.GuildedClient.PreparedEvent') | An event when the client is prepared.<br/> |

| Properties | |
| :--- | :--- |
| [Converters](GuildedClient_Converters 'Guilded.NET.GuildedClient.Converters') | A list of JSON converters used to (de)serialize Guilded responses and WebSocket events.<br/> |
| [GuildedEvents](GuildedClient_GuildedEvents 'Guilded.NET.GuildedClient.GuildedEvents') | A dictionary of Guilded events.<br/> |
| [GuildedLogger](GuildedClient_GuildedLogger 'Guilded.NET.GuildedClient.GuildedLogger') | Logs all of the Guilded.NET related things.<br/> |
| [Me](GuildedClient_Me 'Guilded.NET.GuildedClient.Me') | User account this client is using.<br/> |
| [MessageCreatedEvent](GuildedClient_MessageCreatedEvent 'Guilded.NET.GuildedClient.MessageCreatedEvent') | When a message gets posted in the chat.<br/> |
| [MessageDeletedEvent](GuildedClient_MessageDeletedEvent 'Guilded.NET.GuildedClient.MessageDeletedEvent') | When a message gets removed/deleted in the chat.<br/> |
| [MessageUpdatedEvent](GuildedClient_MessageUpdatedEvent 'Guilded.NET.GuildedClient.MessageUpdatedEvent') | When a message gets updated/edited in the chat.<br/> |
| [WelcomeEvent](GuildedClient_WelcomeEvent 'Guilded.NET.GuildedClient.WelcomeEvent') | An event when WebSocket receives a welcome.<br/> |
| [XpAddedEvent](GuildedClient_XpAddedEvent 'Guilded.NET.GuildedClient.XpAddedEvent') | When a list of users get certain amount of XP.<br/> |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](GuildedClient_AddMembershipAsync(GId_GId) 'Guilded.NET.GuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group.<br/> |
| [AddReactionAsync(Guid, Guid, uint)](GuildedClient_AddReactionAsync(Guid_Guid_uint) 'Guilded.NET.GuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to a message.<br/> |
| [AddRoleAsync(GId, uint)](GuildedClient_AddRoleAsync(GId_uint) 'Guilded.NET.GuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the given user.<br/> |
| [AddXpAsync(GId, short)](GuildedClient_AddXpAsync(GId_short) 'Guilded.NET.GuildedClient.AddXpAsync(Guilded.NET.Base.GId, short)') | Adds XP to the given user.<br/> |
| [AttachRoleLevelAsync(uint, long)](GuildedClient_AttachRoleLevelAsync(uint_long) 'Guilded.NET.GuildedClient.AttachRoleLevelAsync(uint, long)') | Attaches amount of XP required to a role.<br/> |
| [ConnectAsync()](GuildedClient_ConnectAsync() 'Guilded.NET.GuildedClient.ConnectAsync()') | Connects this client to Guilded.<br/> |
| [CreateForumThreadAsync(Guid, string, MessageContent)](GuildedClient_CreateForumThreadAsync(Guid_string_MessageContent) 'Guilded.NET.GuildedClient.CreateForumThreadAsync(System.Guid, string, Guilded.NET.Base.Chat.MessageContent)') | Creates a forum post in a forum channel.<br/> |
| [CreateForumThreadAsync(Guid, string, string)](GuildedClient_CreateForumThreadAsync(Guid_string_string) 'Guilded.NET.GuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a forum post in a forum channel.<br/> |
| [CreateListItemAsync(Guid, MessageContent, MessageContent)](GuildedClient_CreateListItemAsync(Guid_MessageContent_MessageContent) 'Guilded.NET.GuildedClient.CreateListItemAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, Guilded.NET.Base.Chat.MessageContent)') | Creates a new list item in a list channel.<br/> |
| [CreateListItemAsync(Guid, string, string)](GuildedClient_CreateListItemAsync(Guid_string_string) 'Guilded.NET.GuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates a new list item in a list channel.<br/> |
| [CreateMessageAsync(Guid, MessageContent)](GuildedClient_CreateMessageAsync(Guid_MessageContent) 'Guilded.NET.GuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string)](GuildedClient_CreateMessageAsync(Guid_string) 'Guilded.NET.GuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in a chat.<br/> |
| [CreateWebhookAsync(Guid, string)](GuildedClient_CreateWebhookAsync(Guid_string) 'Guilded.NET.GuildedClient.CreateWebhookAsync(System.Guid, string)') | Creates a webhook in a given channel.<br/> |
| [DeleteMessageAsync(Guid, Guid)](GuildedClient_DeleteMessageAsync(Guid_Guid) 'Guilded.NET.GuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes a specified message.<br/> |
| [DeleteWebhookAsync(Guid)](GuildedClient_DeleteWebhookAsync(Guid) 'Guilded.NET.GuildedClient.DeleteWebhookAsync(System.Guid)') | Deletes a given webhook.<br/> |
| [DisconnectAsync()](GuildedClient_DisconnectAsync() 'Guilded.NET.GuildedClient.DisconnectAsync()') | Disconnects this client from Guilded.<br/> |
| [Dispose()](GuildedClient_Dispose() 'Guilded.NET.GuildedClient.Dispose()') | Disposes the bot.<br/> |
| [ExecuteWebhookAsync(Guid, string, string, Embed[])](GuildedClient_ExecuteWebhookAsync(Guid_string_string_Embed__) 'Guilded.NET.GuildedClient.ExecuteWebhookAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[])') | Posts a message using a webhook.<br/> |
| [GetMessageAsync(Guid, Guid)](GuildedClient_GetMessageAsync(Guid_Guid) 'Guilded.NET.GuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message in a specific channel.<br/> |
| [GetMessagesAsync(Guid, uint)](GuildedClient_GetMessagesAsync(Guid_uint) 'Guilded.NET.GuildedClient.GetMessagesAsync(System.Guid, uint)') | Gets messages with a specific limit.<br/> |
| [HandleSocketMessages(object, GuildedEvent)](GuildedClient_HandleSocketMessages(object_GuildedEvent) 'Guilded.NET.GuildedClient.HandleSocketMessages(object, Guilded.NET.Base.Events.GuildedEvent)') | When the socket message event is invoked.<br/> |
| [RemoveMembershipAsync(GId, GId)](GuildedClient_RemoveMembershipAsync(GId_GId) 'Guilded.NET.GuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group.<br/> |
| [RemoveReactionAsync(Guid, Guid, uint)](GuildedClient_RemoveReactionAsync(Guid_Guid_uint) 'Guilded.NET.GuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from a message.<br/> |
| [RemoveRoleAsync(GId, uint)](GuildedClient_RemoveRoleAsync(GId_uint) 'Guilded.NET.GuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the given user.<br/> |
| [UpdateMessageAsync(Guid, Guid, MessageContent)](GuildedClient_UpdateMessageAsync(Guid_Guid_MessageContent) 'Guilded.NET.GuildedClient.UpdateMessageAsync(System.Guid, System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of a message.<br/> |
| [UpdateMessageAsync(Guid, Guid, string)](GuildedClient_UpdateMessageAsync(Guid_Guid_string) 'Guilded.NET.GuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the contents of a message.<br/> |
| [UpdateWebhookAsync(Guid, Guid, string, Uri)](GuildedClient_UpdateWebhookAsync(Guid_Guid_string_Uri) 'Guilded.NET.GuildedClient.UpdateWebhookAsync(System.Guid, System.Guid, string, System.Uri)') | Updates webhook's name or profile picture.<br/> |

| Events | |
| :--- | :--- |
| [MessageCreated](GuildedClient_MessageCreated 'Guilded.NET.GuildedClient.MessageCreated') | When a message gets posted in the chat.<br/> |
| [MessageDeleted](GuildedClient_MessageDeleted 'Guilded.NET.GuildedClient.MessageDeleted') | When a message gets removed/deleted in the chat.<br/> |
| [MessageUpdated](GuildedClient_MessageUpdated 'Guilded.NET.GuildedClient.MessageUpdated') | When a message gets updated/edited in the chat.<br/> |
| [Prepared](GuildedClient_Prepared 'Guilded.NET.GuildedClient.Prepared') | An event when the client is prepared.<br/> |
| [Welcome](GuildedClient_Welcome 'Guilded.NET.GuildedClient.Welcome') | An event when WebSocket receives a welcome.<br/> |
| [XpAdded](GuildedClient_XpAdded 'Guilded.NET.GuildedClient.XpAdded') | When a list of users get certain amount of XP.<br/> |

#### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')