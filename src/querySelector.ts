import {QuerySelector} from "./core";
import {querySelectorAllQuery} from "./types";

export const querySelector = (query: querySelectorAllQuery): QuerySelector => {
  return new QuerySelector(query);
}
