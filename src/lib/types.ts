import { tags } from "$lib/config";

export type tags = (typeof tags)[number];


export type Post = {
	title: string
	slug: string
	description: string
	date: string
	lastUpd: string
	published: boolean
  tags: tags[]
}
