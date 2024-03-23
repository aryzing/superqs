import {
  stringify as superjsonStringify,
  parse as superjsonParse,
} from "superjson";
import { bytesToBase64, base64ToBytes } from "./utils";

type SuperQsValue = any;

export function stringify(obj: SuperQsValue) {
  return bytesToBase64(
    // See https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
    new TextEncoder().encode(superjsonStringify(obj))
  );
}

export function parse(str: string) {
  return superjsonParse(
    // See https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
    new TextDecoder().decode(base64ToBytes(str))
  );
}
