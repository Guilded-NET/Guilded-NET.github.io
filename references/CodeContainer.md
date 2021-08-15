#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## CodeContainer Class
A block with code syntax highlighting.  
```csharp
public class CodeContainer : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.CodeLine, Guilded.NET.Base.Chat.CodeContainer>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[CodeLine](CodeLine.md 'Guilded.NET.Base.Chat.CodeLine')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[CodeContainer](CodeContainer.md 'Guilded.NET.Base.Chat.CodeContainer')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; CodeContainer  
### Example
Basic code container:

```csharp
  
            CodeContainer code = new CodeContainer("csharp", "using System;\nusing System.Linq;");  
            ```


Code container with strings as lines:

```csharp
  
            CodeContainer code = new CodeContainer("csharp", new string[]  
            {  
                "using System;",  
                "using System.Linq;"  
            });  
            ```


Code container with code lines:

```csharp
  
            CodeContainer code = new CodeContainer("csharp", new List<CodeLine>  
            {  
                new CodeLine("using System;"),  
                new CodeLine("using System.Linq;")  
            });  
            ```


Unformatted code container:

```csharp
  
            CodeContainer code = new CodeContainer(new string[]  
            {  
                "This is unformatted code container.",  
                "Nothing will be formatted here."  
            });  
            ```
### Remarks
A code block/container with language associated.  

| Constructors | |
| :--- | :--- |
| [CodeContainer(string, string)](CodeContainer_CodeContainer(string_string).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(string, string)') | A block with code syntax highlighting.<br/> |
| [CodeContainer(string, IEnumerable&lt;string&gt;)](CodeContainer_CodeContainer(string_IEnumerable_string_).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(string, System.Collections.Generic.IEnumerable&lt;string&gt;)') | A block with code syntax highlighting.<br/> |
| [CodeContainer(string, IList&lt;CodeLine&gt;)](CodeContainer_CodeContainer(string_IList_CodeLine_).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.CodeLine&gt;)') | A block with code syntax highlighting.<br/> |
| [CodeContainer(string)](CodeContainer_CodeContainer(string).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(string)') | A block with code syntax highlighting.<br/> |
| [CodeContainer(IEnumerable&lt;string&gt;)](CodeContainer_CodeContainer(IEnumerable_string_).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(System.Collections.Generic.IEnumerable&lt;string&gt;)') | A block with code syntax highlighting.<br/> |
| [CodeContainer(IList&lt;CodeLine&gt;)](CodeContainer_CodeContainer(IList_CodeLine_).md 'Guilded.NET.Base.Chat.CodeContainer.CodeContainer(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.CodeLine&gt;)') | A block with code syntax highlighting.<br/> |

| Properties | |
| :--- | :--- |
| [Language](CodeContainer_Language.md 'Guilded.NET.Base.Chat.CodeContainer.Language') | The language this codeblock is highlighted as.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](CodeContainer_ToString().md 'Guilded.NET.Base.Chat.CodeContainer.ToString()') | Converts [CodeContainer](CodeContainer.md 'Guilded.NET.Base.Chat.CodeContainer') to its Markdown equivalent.<br/> |
| [WithLine(Leaf[])](CodeContainer_WithLine(Leaf__).md 'Guilded.NET.Base.Chat.CodeContainer.WithLine(Guilded.NET.Base.Chat.Leaf[])') | Adds a line to the code container based on given leaves.<br/> |
| [WithLine(TextContainer)](CodeContainer_WithLine(TextContainer).md 'Guilded.NET.Base.Chat.CodeContainer.WithLine(Guilded.NET.Base.Chat.TextContainer)') | Adds a line to the code container based on given text container.<br/> |
| [WithLine(string)](CodeContainer_WithLine(string).md 'Guilded.NET.Base.Chat.CodeContainer.WithLine(string)') | Adds a line to the code container.<br/> |
| [WithLines(string)](CodeContainer_WithLines(string).md 'Guilded.NET.Base.Chat.CodeContainer.WithLines(string)') | Adds an array of lines to the code container.<br/> |
| [WithLines(string[])](CodeContainer_WithLines(string__).md 'Guilded.NET.Base.Chat.CodeContainer.WithLines(string[])') | Adds an array of lines to the code container.<br/> |
#### See Also
- [CodeLine](CodeLine.md 'Guilded.NET.Base.Chat.CodeLine')
