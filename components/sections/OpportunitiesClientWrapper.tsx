"use client";

import { Button } from "@/components/ui/button";

export function OpportunitiesClientWrapper() {
	return (
		<div className="mt-16 pt-8 border-t border-border text-center">
			<div className="max-w-2xl mx-auto">
				<p className="text-lg text-muted-foreground leading-relaxed mb-8">
					<span className="font-medium text-foreground">
						We don't just offer opportunities—we empower you to create them.
					</span>{" "}
					Join a community where ambitious students transform innovative ideas
					into real-world impact across the global maritime industry.
				</p>
				<Button
					size="lg"
					className="text-lg min-w-[200px] h-12"
					onClick={() => {
						window.location.href = "/contact";
					}}
				>
					Join MAP Today
				</Button>
			</div>
		</div>
	);
}
