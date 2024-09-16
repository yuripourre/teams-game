import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/sampleGameTab/index.html")
@PreventIframe("/sampleGameTab/config.html")
@PreventIframe("/sampleGameTab/remove.html")
export class SampleGameTab {
}
