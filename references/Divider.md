#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Divider Class
Seperator that divides document into sections.  
```csharp
public class Divider : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.Divider>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Divider](Divider.md 'Guilded.NET.Base.Chat.Divider')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; Divider  
### Example
```csharp
MessageContent content = new MessageContent  
(  
    new Paragraph("Text here"),  
    new Divider(),      
    new Paragraph("Something else")  
);  
```

| Constructors | |
| :--- | :--- |
| [Divider()](Divider_Divider().md 'Guilded.NET.Base.Chat.Divider.Divider()') | Seperator that divides document into sections.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](Divider_ToString().md 'Guilded.NET.Base.Chat.Divider.ToString()') | Converts divider to its Markdown equivalent.<br/> |
