export interface Challenge {

    title:string
    description:string,
    platForm:string,
    language:string,
    tags:string[],

    solution:Solution[]

}

export interface Solution {
    solution:string,
    reference_URL:string[]
}
