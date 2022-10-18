import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

const typeDefs = loadFilesSync(".", { extensions: ['graphql'], recursive: true})

export default mergeTypeDefs([...scalarTypeDefs, ...typeDefs]);
