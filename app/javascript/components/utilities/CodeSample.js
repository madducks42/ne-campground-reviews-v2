import React from "react";

const CodeSample = () => {
  return (
    <div className="flex-column mt-6 mb-6">
      <h5 className="is-size-5">Tag References:</h5>
      <pre>
        <code>
          &lt;p class=&quot;mods-text&quot;&gt;Each paragraph should be wrapped
          in this tag.&lt;/p&gt;
        </code>
        <br />
        <br />
        <code>
          &lt;ol class=&quot;mods-list&quot;&gt;
          <br />
          &lt;li&gt; Add numbered list item here &lt;/li&gt;
          <br />
          &lt;li&gt; Add numbered list item here &lt;/li&gt;
          <br />
          &lt;/ol&gt;
        </code>
        <br />
        <br />
        <code>
          &lt;ul class=&quot;mods-list content&quot;&gt;
          <br />
          &lt;li&gt; Add unordered list item here &lt;/li&gt;
          <br />
          &lt;li&gt; Add unordered list item here &lt;/li&gt;
          <br />
          &lt;/ul&gt;
        </code>
        <br />
        <br />
        <code>
          &lt;a href=&quot;www.link.com&quot;
          target=&quot;_blank&quot; rel=&quot;noreferrer&quot;
          class=&quot;links&quot; &gt; Use this to add links &lt;/a&gt;
        </code>
        <br />
        <br />
        
      </pre>
    </div>
  );
};
export default CodeSample;
