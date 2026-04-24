import React from 'react'
import Select from 'src/shared/components/form/Select'
import Section from 'src/components/store-ui/Section'
import useTireSearch from 'src/modules/store/hooks/useTireSearch'

const TireSearch = () => {

    const { tabs, activeTabComponent, setActiveTab, activeTab } = useTireSearch()

    return (
        <Section className='relative z-10' densityY='xsmall'>
            <div className="relative mx-auto w-[90%] lg:w-4/6 bg-surface shadow-xl p-8 -top-20 rounded-2xl">
                <div className="mb-8">
                    <h2 className="text-center capitalize font-heading text-3xl md:text-4xl font-bold text-text mb-4">Encuentra La Llanta Perfecta</h2>
                    <p className="text-center text-lg text-muted ">Búsqueda rápida por medida o marca</p>
                </div>
                <div className='flex flex-nowrap lg:grid lg:grid-cols-3 rounded-full p-1 text-text-muted w-full overflow-x-auto lg:overflow-x-hidden mb-6 h-12 bg-sunken gap-2 scrollbar-hide'>
                    {
                        tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center justify-center shrink-0 rounded-full px-3 py-1 text-xs lg:text-sm font-medium ring-offset transition-all gap-2 h-10 ${activeTab === tab.id
                                ? 'bg-secondary text-secondary-soft shadow-lg font-semibold'
                                : 'bg-transparent text-muted'
                                }`}>
                                {tab.label}
                            </button>
                        ))
                    }
                </div>

                <div key={activeTab}>
                    {
                        activeTabComponent.component
                    }
                </div>
            </div>
        </Section>
    )
}

export default TireSearch