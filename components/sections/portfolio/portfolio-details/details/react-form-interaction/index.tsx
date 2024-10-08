import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APISection } from "./tabs/api-section";
import { OverviewSection } from "./tabs/overview";
import { UsageExample } from "./tabs/usage-example";
import { ValidationRulesSection } from "./tabs/validation-rules";

const ReactFormInteractions = () => {
  return (
    <Tabs defaultValue="overview">
      <div className="flex items-center justify-center w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="validation">Validation Rules</TabsTrigger>
          <TabsTrigger value="example">Usage Example</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview">
        <OverviewSection />
      </TabsContent>

      <TabsContent value="api">
        <APISection />
      </TabsContent>

      <TabsContent value="validation">
        <ValidationRulesSection />
      </TabsContent>

      <TabsContent value="example">
        <UsageExample />
      </TabsContent>
    </Tabs>
  );
};

export default ReactFormInteractions;
