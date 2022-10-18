import { mergeResolvers } from "@graphql-tools/merge";
import bookResolver from "./book.resolver";
import authorResolver from "./author.resolver";

import { resolvers as scalarResolvers } from "graphql-scalars";

const resolvers = [bookResolver, authorResolver, scalarResolvers];

export default mergeResolvers(resolvers);
