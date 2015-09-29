
export interface IQuoteServiceResponse
{
	quotes : IQuote[];
}

export interface IQuote {
	quote: string;
	author: string;
}

export class Quote implements IQuote 
{
	quote: string;
	author: string;
}

