'use client'

import { Header } from "@/components/layout/header";
import simpleDoubleFull from "@/mock";
import {
  DoubleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from "@g-loot/react-tournament-brackets";
import { useWindowSize } from '@uidotdev/usehooks';

const WhiteTheme = createTheme({
  connectorColor: "#CED1F2",
  connectorColorHighlight: "#da96c6",
  svgBackground: "#121212",
});

export default function Tabela() {
  const size = useWindowSize();
  const finalWidth = Math.max(Number(size.width) - 50, 500);
  const finalHeight = Math.max(Number(size.height) - 50, 500);
  return (
    <div>
      <div className="w-full">
        <Header />
      </div>
      <DoubleEliminationBracket
        matches={simpleDoubleFull}
        matchComponent={Match}
        options={{
          style: {
            connectorColor: WhiteTheme.connectorColor,
            connectorColorHighlight: WhiteTheme.connectorColorHighlight,
          },
        }}
        svgWrapper={({
          children,
          ...props
        }: {
          children: React.ReactElement;
        }) => (
          <SVGViewer
            width={finalWidth}
            background={WhiteTheme.svgBackground}
            SVGBackground={WhiteTheme.svgBackground}
            height={finalHeight}
            {...props}
          >
            {children}
          </SVGViewer>
        )}
      />
    </div>
  );
}
