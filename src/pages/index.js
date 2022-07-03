import Landing from "./Landing"
import CreateLink from "./CreateLink"
import CopyLink from "./CopyLink"
export default {
    Landing,
    CreateLink,
    CopyLink:{
        component: CopyLink,
        params:':text'
    }
}