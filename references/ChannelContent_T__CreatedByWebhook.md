
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;')
## ChannelContent&lt;T&gt;.CreatedByWebhook Property
The identifier of the webhook creator of the content.  
```csharp
public System.Nullable<System.Guid> CreatedByWebhook { get; set; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')
Webhook ID?
### Remarks
The identifier of the webhook that posted created this content.

<blockquote class="note">  
    Currently, only chat messages can be created by Webhooks.  
</blockquote>
