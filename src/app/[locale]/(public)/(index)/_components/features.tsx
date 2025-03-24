import {
  ImageIcon,
  LayoutGrid,
  MousePointer,
  Sparkles,
  Target,
  Type,
} from "lucide-react";

export const Features = () => (
  <div className="container mx-auto px-4 py-16">
    <div className="text-center mb-16">
      <p className="text-primary font-medium mb-2">Features</p>
      <h2 className="text-4xl font-bold">What Makes Us Different</h2>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        At zanaroot, we go beyond client work. We invest in open-source
        communities and develop our own products to stay innovative and offer
        cutting-edge solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <LayoutGrid className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit
          cum aliquam, consectetur.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Social Proof</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea
          accusamus aperiam.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Target className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Targeted Content</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea
          accusamus aperiam.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ImageIcon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Strong Visuals</h3>
        <p className="text-muted-foreground">
          Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio
          ea accusamus aperiam.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MousePointer className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Clear CTA</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing, odio ea accusamus
          consectetur.
        </p>
      </div>

      <div className="text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Type className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Clear Headline</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit
          cum aliquam. Natus consectetur.
        </p>
      </div>
    </div>
  </div>
);
