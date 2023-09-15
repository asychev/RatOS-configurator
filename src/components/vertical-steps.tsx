import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { classNames } from '../helpers/classNames';
import { StepScreen, StepScreenProps } from '../hooks/useSteps';

interface StepProps {
	steps: StepScreen[];
	screenProps: StepScreenProps;
	currentStepIndex: number;
}

export const VerticalSteps: React.FC<StepProps> = (props) => {
	return (
		<nav aria-label="Progress">
			<ol role="list" className="overflow-hidden">
				{props.steps.map((step, stepIdx) => {
					const name = typeof step.name === 'function' ? step.name(props.screenProps) : step.name;
					const description =
						typeof step.description === 'function' ? step.description(props.screenProps) : step.description;
					return (
						<li key={name} className={classNames(stepIdx !== props.steps.length - 1 ? 'pb-10' : '', 'relative')}>
							{props.currentStepIndex > stepIdx ? (
								<>
									{stepIdx !== props.steps.length - 1 ? (
										<div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-brand-500" aria-hidden="true" />
									) : null}
									<span className="group relative flex items-start">
										<span className="flex h-9 items-center">
											<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 group-hover:bg-brand-600">
												<CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
											</span>
										</span>
										<span className="ml-4 flex min-w-0 flex-col">
											<span className="text-xs font-semibold uppercase tracking-wide dark:text-zinc-200">{name}</span>
											<span className="text-sm text-zinc-500 dark:text-zinc-400">{description}</span>
										</span>
									</span>
								</>
							) : props.currentStepIndex === stepIdx ? (
								<>
									{stepIdx !== props.steps.length - 1 ? (
										<div
											className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"
											aria-hidden="true"
										/>
									) : null}
									<span className="group relative flex items-start" aria-current="step">
										<span className="flex h-9 items-center" aria-hidden="true">
											<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-600 bg-white dark:border-brand-500 dark:bg-zinc-800">
												<span className="h-2.5 w-2.5 rounded-full bg-brand-600 dark:bg-brand-500" />
											</span>
										</span>
										<span className="ml-4 flex min-w-0 flex-col">
											<span className="text-xs font-semibold uppercase tracking-wide text-brand-500">{name}</span>
											<span className="text-sm text-zinc-500 dark:text-zinc-400">{description}</span>
										</span>
									</span>
								</>
							) : (
								<>
									{stepIdx !== props.steps.length - 1 ? (
										<div
											className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-zinc-300 dark:bg-zinc-700"
											aria-hidden="true"
										/>
									) : null}
									<span className="group relative flex items-start">
										<span className="flex h-9 items-center" aria-hidden="true">
											<span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-800">
												<span className="h-2.5 w-2.5 rounded-full bg-transparent" />
											</span>
										</span>
										<span className="ml-4 flex min-w-0 flex-col">
											<span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-200">
												{name}
											</span>
											<span className="text-sm text-zinc-500 dark:text-zinc-400">{description}</span>
										</span>
									</span>
								</>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};
