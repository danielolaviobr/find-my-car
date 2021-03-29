import React from "react";
import dynamic from "next/dynamic";

const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function QR({ delay, onError, onScan, style }) {
  return (
    <QrReader delay={delay} onError={onError} onScan={onScan} style={style} /> //TESTE
  );
}
