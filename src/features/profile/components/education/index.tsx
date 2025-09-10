import { CollapsibleList } from "@/components/collapsible-list";

import { EDUCATION } from "../../data/education";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { EducationItem } from "./education-item";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle>
          Education
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            ({EDUCATION.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={EDUCATION}
        max={8}
        renderItem={(item) => <EducationItem education={item} />}
      />
    </Panel>
  );
}