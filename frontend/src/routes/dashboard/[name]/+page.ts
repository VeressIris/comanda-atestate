// TODO: THIS WILL HAVE TO CHANGE DEPENDING ON IF IT EXISTS IN THE DB OR NOT IG
import type { PageLoad } from "./$types";
export const load: PageLoad = ({ params }) => {
  return {
    title: params.name,
  };
};
