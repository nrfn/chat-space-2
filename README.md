# README
## Description
chat-spase復習用のアプリ
## Features
## Requirement

# Database design
## users table
|Column|Type|Options|
|name|string|null:false|
|email|string|null:false, unique:true|
|password|string|null:false|
### Association
has_many :groups, through: :groups_users
has_many :groups_users
has_many :messages

## groups table
|Column|Type|Options|
|name|string|null:false|
### Association
has_many users
has_many groups_users, through::users
has_many messages

## groups_users table
|Column|Type|Options|
|group_id|references:group|foregin_key:true|
|user_id|references:user|foregin_key:true|
### Association
belongs_to :group
belongs_to :user

## messages table
|Column|Type|Options|
|content|string|null:false|
|image|string||
|group_id|references:group|foregin_key:true|
|user_id|references:user|foregin_key:true|
### Association
belongs_to :group
belongs_to :user