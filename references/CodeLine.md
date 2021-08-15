#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## CodeLine Class
A line of code in [CodeContainer](CodeContainer.md 'Guilded.NET.Base.Chat.CodeContainer').  
```csharp
public class CodeLine : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.CodeLine>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[CodeLine](CodeLine.md 'Guilded.NET.Base.Chat.CodeLine')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; CodeLine  
### Example
Using code line in code container:

```csharp
  
            CodeLine[] lines = new CodeLine[]  
            {  
                new CodeLine("using System;"),  
                new CodeLine(new TextContainer("using System.Linq;")),  
                new CodeLine(new Leaf("using"), new Leaf(" "), new Leaf("System.Collections.Generic"), new Leaf(";"))  
            };  
            CodeContainer code = new CodeContainer("csharp", lines);  
            ```
### Remarks
A line in a code container.  

| Constructors | |
| :--- | :--- |
| [CodeLine(Leaf[])](CodeLine_CodeLine(Leaf__).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(Guilded.NET.Base.Chat.Leaf[])') | A line of code in code block node.<br/> |
| [CodeLine(TextContainer)](CodeLine_CodeLine(TextContainer).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(Guilded.NET.Base.Chat.TextContainer)') | A line of code in code block node.<br/> |
| [CodeLine(object)](CodeLine_CodeLine(object).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(object)') | A line of code in code block node.<br/> |
| [CodeLine(string, object[])](CodeLine_CodeLine(string_object__).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(string, object[])') | A line of code in code block node.<br/> |
| [CodeLine(string)](CodeLine_CodeLine(string).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(string)') | A line of code in code block node.<br/> |
| [CodeLine(IList&lt;Leaf&gt;)](CodeLine_CodeLine(IList_Leaf_).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Leaf&gt;)') | A line of code in code block node.<br/> |
| [CodeLine(IList&lt;TextContainer&gt;)](CodeLine_CodeLine(IList_TextContainer_).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.TextContainer&gt;)') | A line of code in code block node.<br/> |
| [CodeLine(IFormatProvider, string, object[])](CodeLine_CodeLine(IFormatProvider_string_object__).md 'Guilded.NET.Base.Chat.CodeLine.CodeLine(System.IFormatProvider, string, object[])') | A line of code in code block node.<br/> |
#### See Also
- [CodeContainer](CodeContainer.md 'Guilded.NET.Base.Chat.CodeContainer')
