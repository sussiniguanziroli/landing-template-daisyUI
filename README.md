Documentation: Modular Landing Page System
==========================================

This document outlines the new modular architecture for the landing page generator. The core idea is to control the entire page layout—which sections appear and in what order—from a single JSON configuration file.

### Key Concepts

1.  **Component-Driven Layout**: The page is constructed by mapping component names from the JSON file to their corresponding React components.
    
2.  **Dynamic Rendering**: App.jsx acts as a dynamic renderer. It reads the layout from the JSON and renders the sections in the specified sequence.
    
3.  **Total Control via JSON**: To change the page, you only need to modify the JSON file. No changes to the React code are necessary for reordering or toggling sections.
    

### New JSON Structure

The main data file is now landing-page-layouts.json. It contains multiple "profile" objects (e.g., corporate, family, saas, simpleCta). Each profile has two main parts: globals and layout.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "profileName": {      "globals": {        "appName": "Your App Name",        "theme": "cupcake"      },      "layout": [        {          "component": "Hero",          "data": { ... }        },        {          "component": "Features",          "data": { ... }        }      ],      "footer": { ... }    }  }   `

*   globals: Contains sitewide settings like appName and the DaisyUI theme.
    
*   layout: This is an **array of objects** that defines the body of the page.
    
    *   Each object in the array represents a section to be rendered.
        
    *   component: A string that **must match the name of the React component** (e.g., "Hero", "Features").
        
    *   data: An object containing all the props needed by that specific component.
        
*   footer: The data for the footer, which is handled separately as it's a persistent element.
    

### How to Use

1.  import layouts from './landing-page-layouts.json';const pageData = layouts.corporate; // Or layouts.family, etc.
    
2.  **Modify a Layout**:
    
    *   **To remove a section**, delete its corresponding object from the layout array.
        
    *   **To reorder sections**, change the order of the objects in the layout array.
        
    *   **To add a new section**, add a new object to the array with the correct component name and its data.
        
3.  **Create a New Landing Page**:
    
    *   In landing-page-layouts.json, duplicate an existing profile object.
        
    *   Give it a new unique name (e.g., "myNewPage").
        
    *   Customize the globals, layout, and footer sections as desired.
        

### Extending with New Components

If you create a new component (e.g., Gallery.jsx), you can make it available to the renderer by following these steps:

1.  **Create your component**: src/components/Gallery.jsx.
    
2.  **Import it into App.jsx**.
    
3.  const COMPONENT\_MAP = { Hero, Features, Testimonials, Plans, CTA, Gallery // Add your new component here};
    

Now you can use "component": "Gallery" in your JSON layout array to render it.