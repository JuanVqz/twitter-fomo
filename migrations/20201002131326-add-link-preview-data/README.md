# Migration `20201002131326-add-link-preview-data`

This migration has been generated by Tom Dohnal at 10/2/2020, 3:13:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Tweet" ADD COLUMN "linkTitle" text   ,
ADD COLUMN "linkDescription" text   ,
ADD COLUMN "linkImageUrl" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200926183131-add-payload-type..20201002131326-add-link-preview-data
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider        = "prisma-client-js"
@@ -54,8 +54,11 @@
   account                Account     @relation(fields: [accountId], references: [id])
   accountId              Int
   favoritesCount         Int
   retweetsCount          Int
+  linkTitle              String?
+  linkDescription        String?
+  linkImageUrl           String?
   payload                Json
   tweetTypes             TweetType[] @relation(references: [id])
   createdAt              DateTime    @default(now())
   updatedAt              DateTime    @updatedAt
```


