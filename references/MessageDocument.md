
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageDocument Class
The document of the content containing all of the nodes and information.  
```csharp
public class MessageDocument : Guilded.NET.Base.Chat.MessageRoot<Guilded.NET.Base.Chat.MessageDocument>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Guilded.NET.Base.Chat.MessageRoot&lt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;')[MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')[&gt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;') &#x27A1; MessageDocument  

| Constructors | |
| :--- | :--- |
| [MessageDocument(ElementData, Leaf[])](MessageDocument_MessageDocument(ElementData_Leaf__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.Leaf[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, Node[])](MessageDocument_MessageDocument(ElementData_Node__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.Node[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, TextContainer)](MessageDocument_MessageDocument(ElementData_TextContainer) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.TextContainer)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, Embed[])](MessageDocument_MessageDocument(ElementData_Embed__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Embeds.Embed[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, object)](MessageDocument_MessageDocument(ElementData_object) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, object)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, string, object[])](MessageDocument_MessageDocument(ElementData_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, string)](MessageDocument_MessageDocument(ElementData_string) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, string)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, IList&lt;Node&gt;)](MessageDocument_MessageDocument(ElementData_IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, IFormatProvider, string, object[])](MessageDocument_MessageDocument(ElementData_IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, System.IFormatProvider, string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Leaf[])](MessageDocument_MessageDocument(Leaf__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.Leaf[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Node[])](MessageDocument_MessageDocument(Node__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.Node[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(TextContainer)](MessageDocument_MessageDocument(TextContainer) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.TextContainer)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Embed[])](MessageDocument_MessageDocument(Embed__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Embeds.Embed[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(object)](MessageDocument_MessageDocument(object) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(object)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(string, object[])](MessageDocument_MessageDocument(string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(string)](MessageDocument_MessageDocument(string) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(string)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(IList&lt;Node&gt;)](MessageDocument_MessageDocument(IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(IFormatProvider, string, object[])](MessageDocument_MessageDocument(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(System.IFormatProvider, string, object[])') | The document of the content containing all of the nodes and information.<br/> |

| Properties | |
| :--- | :--- |
| [Data](MessageDocument_Data 'Guilded.NET.Base.Chat.MessageDocument.Data') | Data of this message document.<br/> |
| [Nodes](MessageDocument_Nodes 'Guilded.NET.Base.Chat.MessageDocument.Nodes') | The list of nodes in the message.<br/> |

| Methods | |
| :--- | :--- |
| [Add(Node)](MessageDocument_Add(Node) 'Guilded.NET.Base.Chat.MessageDocument.Add(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [Add(IList&lt;Node&gt;)](MessageDocument_Add(IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.Add(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |
| [AddShare(string)](MessageDocument_AddShare(string) 'Guilded.NET.Base.Chat.MessageDocument.AddShare(string)') | Adds [url](MessageDocument_AddShare(string)#Guilded_NET_Base_Chat_MessageDocument_AddShare(string)_url 'Guilded.NET.Base.Chat.MessageDocument.AddShare(string).url') as an [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to shared URL list.<br/> |
| [AddShare(IList&lt;Uri&gt;)](MessageDocument_AddShare(IList_Uri_) 'Guilded.NET.Base.Chat.MessageDocument.AddShare(System.Collections.Generic.IList&lt;System.Uri&gt;)') | Adds a list of shared URLs from [urls](MessageDocument_AddShare(IList_Uri_)#Guilded_NET_Base_Chat_MessageDocument_AddShare(System_Collections_Generic_IList_System_Uri_)_urls 'Guilded.NET.Base.Chat.MessageDocument.AddShare(System.Collections.Generic.IList&lt;System.Uri&gt;).urls').<br/> |
| [AddShare(Uri)](MessageDocument_AddShare(Uri) 'Guilded.NET.Base.Chat.MessageDocument.AddShare(System.Uri)') | Adds [url](MessageDocument_AddShare(Uri)#Guilded_NET_Base_Chat_MessageDocument_AddShare(System_Uri)_url 'Guilded.NET.Base.Chat.MessageDocument.AddShare(System.Uri).url') to shared URL list.<br/> |
| [ToString()](MessageDocument_ToString() 'Guilded.NET.Base.Chat.MessageDocument.ToString()') | Converts all nodes to string and joins them together.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')
- [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
