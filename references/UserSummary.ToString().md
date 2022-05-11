---
title: ToString()
layout: references
section: references
tags:
  - references
  - method
description: "

Returns the string representation of this [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') instance."
---

## UserSummary.ToString() Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary.md 'Guilded.Base.Users.UserSummary')

Returns the string representation of this [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') instance.

```csharp
public override string ToString();
```

### Remarks
  
The mention syntax of the user will be returned.

### Example
  
An example of a code with clearly defined identifier:  
  
```csharp  
UserSummary user = new(new HashId("R40Mp0Wd"), UserType.User, "Example");  
Console.WriteLine("Here's the user: {0}", user);  
```  
  
The output of the code above:  
  
```csharp  
Here's the user: <@R40Mp0Wd>  
```

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown user mention