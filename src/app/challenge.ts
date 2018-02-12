export interface Challenge {

    title:string
    description:string,
    platform_id:Platform,
    language_id:Language,
    tags:any,
    solutions:Solution

}

export interface Solution {
    description:string,
    reference_link:any
}

export interface Platform {
  id:number,
  platform:string
}

export interface Language {
    id:number,
    language:string
}
