---
title: Guilded.Commands
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Commands Namespace
- **[AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument')** `Class`
  Represents the information about any command argument in .
  - **[AbstractCommandArgument(ParameterInfo)](AbstractCommandArgument.AbstractCommandArgument(ParameterInfo) 'Guilded.Commands.AbstractCommandArgument.AbstractCommandArgument(ParameterInfo)')** `Constructor`
    Initializes a new instance of [AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') from a parameter.
  - **[ArgumentType](AbstractCommandArgument.ArgumentType 'Guilded.Commands.AbstractCommandArgument.ArgumentType')** `Property`
    Gets the type of [the parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter').
  - **[Attribute](AbstractCommandArgument.Attribute 'Guilded.Commands.AbstractCommandArgument.Attribute')** `Property`
    Gets [the attribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute') that was used to declare [the command parameter](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[Name](AbstractCommandArgument.Name 'Guilded.Commands.AbstractCommandArgument.Name')** `Property`
    Gets the displayed name of [the command argument](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name').
  - **[Parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter')** `Property`
    Gets the parameter that was declared in the method.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](AbstractCommandArgument.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.AbstractCommandArgument.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>')** `Class`
  Represents the base for information about any type of Guilded.NET command.
  - **[AbstractCommandInfo(CommandAttribute, TMember)](AbstractCommandInfo_TMember_.AbstractCommandInfo(CommandAttribute,TMember) 'Guilded.Commands.AbstractCommandInfo<TMember>.AbstractCommandInfo(Guilded.Commands.CommandAttribute, TMember)')** `Constructor`
    Initializes a new instance of [AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>').
  - **[Aliases](AbstractCommandInfo_TMember_.Aliases 'Guilded.Commands.AbstractCommandInfo<TMember>.Aliases')** `Property`
    Gets the array of [alternative names](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases') of the command.
  - **[Attribute](AbstractCommandInfo_TMember_.Attribute 'Guilded.Commands.AbstractCommandInfo<TMember>.Attribute')** `Property`
    Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member').
  - **[Description](AbstractCommandInfo_TMember_.Description 'Guilded.Commands.AbstractCommandInfo<TMember>.Description')** `Property`
    Gets the description of the command.
  - **[Examples](AbstractCommandInfo_TMember_.Examples 'Guilded.Commands.AbstractCommandInfo<TMember>.Examples')** `Property`
    Gets the examples of how to use the command.
  - **[Member](AbstractCommandInfo_TMember_.Member 'Guilded.Commands.AbstractCommandInfo<TMember>.Member')** `Property`
    Gets the member who was declared as a command.
  - **[Name](AbstractCommandInfo_TMember_.Name 'Guilded.Commands.AbstractCommandInfo<TMember>.Name')** `Property`
    Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command.
- **[ClientCommandExtensions](ClientCommandExtensions 'Guilded.Commands.ClientCommandExtensions')** `Class`
  Extensions for Guilded clients related to commands.
  - **[AddCommands(this AbstractGuildedClient, CommandModule)](ClientCommandExtensions.AddCommands(thisAbstractGuildedClient,CommandModule) 'Guilded.Commands.ClientCommandExtensions.AddCommands(this Guilded.AbstractGuildedClient, Guilded.Commands.CommandModule)')** `Method`
    Adds a command module to the client.
- **[CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo')** `Class`
  Represents the information about one-value command argument in .
  - **[CommandArgumentInfo(ParameterInfo)](CommandArgumentInfo.CommandArgumentInfo(ParameterInfo) 'Guilded.Commands.CommandArgumentInfo.CommandArgumentInfo(ParameterInfo)')** `Constructor`
    Initializes a new instance of [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo') from a parameter.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandArgumentInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')** `Class`
  Declares a method or a type as a command.
  - **[CommandAttribute()](CommandAttribute.CommandAttribute() 'Guilded.Commands.CommandAttribute.CommandAttribute()')** `Constructor`
    Declares a method as a command with no aliases.
  - **[CommandAttribute(string)](CommandAttribute.CommandAttribute(string) 'Guilded.Commands.CommandAttribute.CommandAttribute(string)')** `Constructor`
    Declares a method as a command with given name
  - **[Aliases](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases')** `Property`
    Gets the alternative names of the command.
  - **[Description](CommandAttribute.Description 'Guilded.Commands.CommandAttribute.Description')** `Property`
    Gets the description of the command.
  - **[Examples](CommandAttribute.Examples 'Guilded.Commands.CommandAttribute.Examples')** `Property`
    Gets the examples of how to use the command.
  - **[Name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name')** `Property`
    Gets the overriden name of the command.
- **[CommandBase](CommandBase 'Guilded.Commands.CommandBase')** `Class`
  Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandBase()](CommandBase.CommandBase() 'Guilded.Commands.CommandBase.CommandBase()')** `Constructor`
    Initializes a new instance of [CommandBase](CommandBase 'Guilded.Commands.CommandBase').
  - **[Commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands')** `Property`
    Gets the list of commands or sub-commands of this command.
  - **[FailedCommand](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand')** `Property`
    Gets the event for failed command invokation.
  - **[FilterCommandsByName(string)](CommandBase.FilterCommandsByName(string) 'Guilded.Commands.CommandBase.FilterCommandsByName(string)')** `Method`
    Filters out commands that do not have name.
  - **[InvokeAnyCommandAsync(RootCommandContext, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeAnyCommandAsync(RootCommandContext,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>)')** `Method`
    Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked.
  - **[InvokeAsync(string, RootCommandContext, IEnumerable&lt;string&gt;)](CommandBase.InvokeAsync(string,RootCommandContext,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAsync(string, Guilded.Commands.RootCommandContext, System.Collections.Generic.IEnumerable<string>)')** `Method`
    Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands').
- **[CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo')** `Class`
  Represents the information about types that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandContainerInfo(Type, CommandAttribute, CommandBase)](CommandContainerInfo.CommandContainerInfo(Type,CommandAttribute,CommandBase) 'Guilded.Commands.CommandContainerInfo.CommandContainerInfo(System.Type, Guilded.Commands.CommandAttribute, Guilded.Commands.CommandBase)')** `Constructor`
    Initializes a new instance of [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo') from the type.
  - **[Instance](CommandContainerInfo.Instance 'Guilded.Commands.CommandContainerInfo.Instance')** `Property`
    Gets the created instance of [the command](CommandAttribute 'Guilded.Commands.CommandAttribute') type for this command.
  - **[SubCommands](CommandContainerInfo.SubCommands 'Guilded.Commands.CommandContainerInfo.SubCommands')** `Property`
    Gets the list of commands or sub-commands of this command.
- **[CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent')** `Class`
  Represents an event that occurs once someone invokes a command.
  - **[CommandEvent(RootCommandContext, string, IEnumerable&lt;string&gt;)](CommandEvent.CommandEvent(RootCommandContext,string,IEnumerable_string_) 'Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>)')** `Constructor`
    Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent').
  - **[Arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments')** `Property`
    Gets the enumerable of string arguments that were given to the command.
  - **[ChannelId](CommandEvent.ChannelId 'Guilded.Commands.CommandEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') are.
  - **[CommandName](CommandEvent.CommandName 'Guilded.Commands.CommandEvent.CommandName')** `Property`
    Gets the name of that was used in the command.
  - **[Content](CommandEvent.Content 'Guilded.Commands.CommandEvent.Content')** `Property`
    Gets the text contents of [the message](Message 'Guilded.Base.Content.Message').
  - **[CreatedAt](CommandEvent.CreatedAt 'Guilded.Commands.CommandEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') were created.
  - **[CreatedBy](CommandEvent.CreatedBy 'Guilded.Commands.CommandEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2').
  - **[CreatedByWebhook](CommandEvent.CreatedByWebhook 'Guilded.Commands.CommandEvent.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message.
  - **[Embeds](CommandEvent.Embeds 'Guilded.Commands.CommandEvent.Embeds')** `Property`
    Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains.
  - **[IsPrivate](CommandEvent.IsPrivate 'Guilded.Commands.CommandEvent.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsReply](CommandEvent.IsReply 'Guilded.Commands.CommandEvent.IsReply')** `Property`
    Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message.
  - **[Message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message')** `Property`
    Gets the message received from the event.
  - **[MessageEvent](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent')** `Property`
    Gets the message event that invoked the command.
  - **[Prefix](CommandEvent.Prefix 'Guilded.Commands.CommandEvent.Prefix')** `Property`
    Gets the prefix that has been used on the command.
  - **[ReplyMessageIds](CommandEvent.ReplyMessageIds 'Guilded.Commands.CommandEvent.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.
  - **[RootArguments](CommandEvent.RootArguments 'Guilded.Commands.CommandEvent.RootArguments')** `Property`
    Gets the enumerable of string arguments that were given to the root-level command in [the message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message').
  - **[RootCommand](CommandEvent.RootCommand 'Guilded.Commands.CommandEvent.RootCommand')** `Property`
    Getss the most-top command that was invoked.
  - **[RootCommandName](CommandEvent.RootCommandName 'Guilded.Commands.CommandEvent.RootCommandName')** `Property`
    Gets the name of the root-level command that was used in [the message](CommandEvent.Message 'Guilded.Commands.CommandEvent.Message').
  - **[ServerId](CommandEvent.ServerId 'Guilded.Commands.CommandEvent.ServerId')** `Property`
    Gets the identifier of the server where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent`2') are.
  - **[AddReactionAsync(uint)](CommandEvent.AddReactionAsync(uint) 'Guilded.Commands.CommandEvent.AddReactionAsync(uint)')** `Method`
    Adds emote to the message.
  - **[CreateMessageAsync(bool, bool, Guid[], Embed[])](CommandEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(MessageContent)](CommandEvent.CreateMessageAsync(MessageContent) 'Guilded.Commands.CommandEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(Embed[])](CommandEvent.CreateMessageAsync(Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[], Embed[])](CommandEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[])](CommandEvent.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool)](CommandEvent.CreateMessageAsync(string,bool,bool) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, bool, bool)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string, Guid[])](CommandEvent.CreateMessageAsync(string,Guid[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string, Embed[])](CommandEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[CreateMessageAsync(string)](CommandEvent.CreateMessageAsync(string) 'Guilded.Commands.CommandEvent.CreateMessageAsync(string)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[DeleteAsync()](CommandEvent.DeleteAsync() 'Guilded.Commands.CommandEvent.DeleteAsync()')** `Method`
    Deletes the message.
  - **[ReplyAsync(bool, bool, Embed[])](CommandEvent.ReplyAsync(bool,bool,Embed[]) 'Guilded.Commands.CommandEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[ReplyAsync(string, bool, bool, Embed[])](CommandEvent.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[ReplyAsync(string, bool, bool)](CommandEvent.ReplyAsync(string,bool,bool) 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[ReplyAsync(string)](CommandEvent.ReplyAsync(string) 'Guilded.Commands.CommandEvent.ReplyAsync(string)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).
  - **[UpdateAsync(string)](CommandEvent.UpdateAsync(string) 'Guilded.Commands.CommandEvent.UpdateAsync(string)')** `Method`
    Edits the content of a message.
- **[CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')** `Class`
  Declares a method as a [failed command](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') handler.
  - **[CommandFallbackAttribute(FallbackType)](CommandFallbackAttribute.CommandFallbackAttribute(FallbackType) 'Guilded.Commands.CommandFallbackAttribute.CommandFallbackAttribute(Guilded.Commands.FallbackType)')** `Constructor`
    Declares a method as a failed command handler based on type.
  - **[Type](CommandFallbackAttribute.Type 'Guilded.Commands.CommandFallbackAttribute.Type')** `Property`
    Gets the type of [failed command](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') event to handle.
- **[CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo')** `Class`
  Represents the information about methods that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandInfo(MethodInfo, CommandAttribute, IEnumerable&lt;ParameterInfo&gt;)](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_) 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>)')** `Constructor`
    Initializes a new instance of [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo') from the method.
  - **[Arguments](CommandInfo.Arguments 'Guilded.Commands.CommandInfo.Arguments')** `Property`
    Gets the enumerable of command arguments that can be specified by users.
  - **[HasRestArgument](CommandInfo.HasRestArgument 'Guilded.Commands.CommandInfo.HasRestArgument')** `Property`
    Gets whether there is a rest argument for the command.
  - **[InvokeAsync(CommandBase, CommandEvent, IEnumerable&lt;object&gt;)](CommandInfo.InvokeAsync(CommandBase,CommandEvent,IEnumerable_object_) 'Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandBase, Guilded.Commands.CommandEvent, System.Collections.Generic.IEnumerable<object>)')** `Method`
    Invokes the command.
- **[CommandModule](CommandModule 'Guilded.Commands.CommandModule')** `Class`
  The module that adds commands to Guilded clients.
  - **[CommandModule(ContextPrefix, char[], StringSplitOptions)](CommandModule.CommandModule(ContextPrefix,char[],StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, char[], StringSplitOptions)')** `Constructor`
    Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based prefix.
  - **[CommandModule(ContextPrefix, StringSplitOptions)](CommandModule.CommandModule(ContextPrefix,StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, StringSplitOptions)')** `Constructor`
    Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based prefix.
  - **[CommandModule(string, char[], StringSplitOptions)](CommandModule.CommandModule(string,char[],StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(string, char[], StringSplitOptions)')** `Constructor`
    Creates a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static prefix.
  - **[CommandModule(string, StringSplitOptions)](CommandModule.CommandModule(string,StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(string, StringSplitOptions)')** `Constructor`
    Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static prefix.
  - **[CommandModule(StringSplitOptions)](CommandModule.CommandModule(StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(StringSplitOptions)')** `Constructor`
    Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with no prefix.
  - **[DefaultSeparators](CommandModule.DefaultSeparators 'Guilded.Commands.CommandModule.DefaultSeparators')** `Field`
    The default argument separator characters.
  - **[DefaultSplitOptions](CommandModule.DefaultSplitOptions 'Guilded.Commands.CommandModule.DefaultSplitOptions')** `Field`
    The default splitting options for command arguments.
  - **[Prefix](CommandModule.Prefix 'Guilded.Commands.CommandModule.Prefix')** `Property`
    Gets the method that will be used to get prefix based on [the current context](MessageEvent 'Guilded.Base.Events.MessageEvent').
  - **[Separators](CommandModule.Separators 'Guilded.Commands.CommandModule.Separators')** `Property`
    Gets the characters that separate command arguments.
  - **[SplitOptions](CommandModule.SplitOptions 'Guilded.Commands.CommandModule.SplitOptions')** `Property`
    Gets the splitting options that will be used while splitting command arguments.
  - **[AddTo(AbstractGuildedClient)](CommandModule.AddTo(AbstractGuildedClient) 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient)')** `Method`
    Adds the command module to the specified client with the given settings.
  - **[Remove()](CommandModule.Remove() 'Guilded.Commands.CommandModule.Remove()')** `Method`
    Removes the command module from the subscribed client.
- **[CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute')** `Class`
  Declares a parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') parameter.
  - **[CommandParamAttribute()](CommandParamAttribute.CommandParamAttribute() 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute()')** `Constructor`
    Declares a command parameter with the display name as the parameter's name.
  - **[CommandParamAttribute(string)](CommandParamAttribute.CommandParamAttribute(string) 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute(string)')** `Constructor`
    Declares a command parameter with the specified name.
  - **[Name](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name')** `Property`
    Gets the displayed name of the parameter.
- **[CommandRestInfo](CommandRestInfo 'Guilded.Commands.CommandRestInfo')** `Class`
  Represents the information about array command argument in .
  - **[CommandRestInfo(ParameterInfo)](CommandRestInfo.CommandRestInfo(ParameterInfo) 'Guilded.Commands.CommandRestInfo.CommandRestInfo(ParameterInfo)')** `Constructor`
    Initializes a new instance of [CommandRestInfo](CommandRestInfo 'Guilded.Commands.CommandRestInfo') from a parameter.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandRestInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandRestInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')** `Class`
  Represents an event that occurs once someone invokes a command.
  - **[FailedCommandEvent(RootCommandContext, string, IEnumerable&lt;string&gt;, FallbackType)](FailedCommandEvent.FailedCommandEvent(RootCommandContext,string,IEnumerable_string_,FallbackType) 'Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>, Guilded.Commands.FallbackType)')** `Constructor`
    Initializes a new instance of [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').
  - **[Type](FailedCommandEvent.Type 'Guilded.Commands.FailedCommandEvent.Type')** `Property`
    Gets the type of the error that occurred.
- **[RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext')** `Struct`
  Represents the information about the root/original command.
  - **[RootCommandContext(MessageEvent, string, string, IEnumerable&lt;string&gt;)](RootCommandContext.RootCommandContext(MessageEvent,string,string,IEnumerable_string_) 'Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent, string, string, System.Collections.Generic.IEnumerable<string>)')** `Constructor`
    Initializes a new instance of [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext').
  - **[MessageEvent](RootCommandContext.MessageEvent 'Guilded.Commands.RootCommandContext.MessageEvent')** `Property`
    Gets the message event that invoked the command.
  - **[Prefix](RootCommandContext.Prefix 'Guilded.Commands.RootCommandContext.Prefix')** `Property`
    Gets the prefix that was fetched for the command.
  - **[RootArguments](RootCommandContext.RootArguments 'Guilded.Commands.RootCommandContext.RootArguments')** `Property`
    Gets the given arguments to the original command.
  - **[RootCommandName](RootCommandContext.RootCommandName 'Guilded.Commands.RootCommandContext.RootCommandName')** `Property`
    Gets the name of the original command that was used.
- **[ICommandInfo&lt;TMember&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')** `Interface`
  Represents the interface for all commands.
  - **[Aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases')** `Property`
    Gets the array of [alternative names](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases') of the command.
  - **[Attribute](ICommandInfo_TMember_.Attribute 'Guilded.Commands.ICommandInfo<TMember>.Attribute')** `Property`
    Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member').
  - **[Member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member')** `Property`
    Gets the member who was declared as a command.
  - **[Name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name')** `Property`
    Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command.
  - **[HasName(string)](ICommandInfo_TMember_.HasName(string) 'Guilded.Commands.ICommandInfo<TMember>.HasName(string)')** `Method`
    Gets whether the name matches command's [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') or its [aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases').
- **[FallbackType](FallbackType 'Guilded.Commands.FallbackType')** `Enum`
  Represents the type of [sub command failure](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').
  - **[NoCommandFound](FallbackType#Guilded.Commands.FallbackType.NoCommandFound 'Guilded.Commands.FallbackType.NoCommandFound')** `Field`
    The [sub-command/command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') with the specified name or arguments does not exist.
  - **[Unspecified](FallbackType#Guilded.Commands.FallbackType.Unspecified 'Guilded.Commands.FallbackType.Unspecified')** `Field`
    The parent command was called with the name of [sub-command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') not given.
- **[ContextPrefix(MessageEvent)](ContextPrefix(MessageEvent) 'Guilded.Commands.ContextPrefix(Guilded.Base.Events.MessageEvent)')** `Delegate`
  Defines a method to fetch prefix.