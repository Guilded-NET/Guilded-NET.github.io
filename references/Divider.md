
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Divider Class
Seperator that divides document into sections.  
```csharp
public class Divider : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.Divider>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Divider](Divider 'Guilded.NET.Base.Chat.Divider')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; Divider  
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
| [Divider()](Divider_Divider() 'Guilded.NET.Base.Chat.Divider.Divider()') | Seperator that divides document into sections.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](Divider_ToString() 'Guilded.NET.Base.Chat.Divider.ToString()') | Converts divider to its Markdown equivalent.<br/> |
